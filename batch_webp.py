#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import argparse
import os
from pathlib import Path
from PIL import Image, ImageOps

IMG_EXTS = {".jpg", ".jpeg", ".png"}

def list_images(folder: Path, pattern: str | None):
    files = []
    for p in folder.iterdir():
        if not p.is_file():
            continue
        if p.suffix.lower() not in IMG_EXTS:
            continue
        if pattern and not p.match(pattern):
            continue
        files.append(p)
    files.sort(key=lambda x: x.name.lower())
    return files

def resize_image(img: Image.Image, width: int, height: int, mode: str):
    # mode:
    #  - contain: fit inside (may add padding if keep aspect)
    #  - cover: fill and crop
    #  - exact: force exact (may distort)
    if mode == "exact":
        return img.resize((width, height), Image.Resampling.LANCZOS)

    if mode == "contain":
        # Keep aspect ratio, pad to exact size
        return ImageOps.pad(img, (width, height), method=Image.Resampling.LANCZOS, color=None, centering=(0.5, 0.5))

    if mode == "cover":
        # Keep aspect ratio, crop to fill
        return ImageOps.fit(img, (width, height), method=Image.Resampling.LANCZOS, centering=(0.5, 0.5))

    raise ValueError(f"Unknown resize mode: {mode}")

def convert_one(src: Path, dst: Path, width: int, height: int, mode: str, quality: int):
    with Image.open(src) as img:
        # Correct orientation (EXIF)
        img = ImageOps.exif_transpose(img)

        # Ensure alpha for PNG keeps transparency
        if img.mode not in ("RGB", "RGBA"):
            img = img.convert("RGBA" if "A" in img.getbands() else "RGB")

        if width and height:
            img = resize_image(img, width, height, mode)

        dst.parent.mkdir(parents=True, exist_ok=True)

        # WebP options: method=6 best compression; quality controls size/quality
        save_kwargs = dict(format="WEBP", quality=quality, method=6)

        # If has alpha, keep it
        if img.mode == "RGBA":
            save_kwargs["lossless"] = False  # set True if you want lossless webp (much bigger)
        img.save(dst, **save_kwargs)

def main():
    ap = argparse.ArgumentParser(description="Batch resize (fixed WxH) and convert JPG/PNG to WebP in a single folder.")
    ap.add_argument("--in", dest="in_dir", required=True, help="Input folder (single folder).")
    ap.add_argument("--out", dest="out_dir", required=True, help="Output folder.")
    ap.add_argument("--w", type=int, default=0, help="Target width (px).")
    ap.add_argument("--h", type=int, default=0, help="Target height (px).")
    ap.add_argument("--mode", choices=["contain", "cover", "exact"], default="contain",
                    help="Resize mode: contain (pad), cover (crop), exact (stretch).")
    ap.add_argument("--q", type=int, default=80, help="WebP quality (1-100), typical 70-85.")
    ap.add_argument("--pattern", type=str, default=None,
                    help="Optional glob pattern within folder, e.g. '*.png' or 'hero*.jpg'")
    ap.add_argument("--start", type=int, default=0, help="Start index (inclusive) after sorting by filename.")
    ap.add_argument("--end", type=int, default=-1, help="End index (inclusive). -1 means to the last file.")
    ap.add_argument("--overwrite", action="store_true", help="Overwrite output files if exist.")
    args = ap.parse_args()

    in_dir = Path(args.in_dir).expanduser().resolve()
    out_dir = Path(args.out_dir).expanduser().resolve()

    if not in_dir.exists() or not in_dir.is_dir():
        raise SystemExit(f"Input folder not found: {in_dir}")

    if (args.w == 0) ^ (args.h == 0):
        raise SystemExit("Please provide both --w and --h, or neither (to skip resizing).")

    if not (1 <= args.q <= 100):
        raise SystemExit("--q must be 1..100")

    files = list_images(in_dir, args.pattern)
    if not files:
        raise SystemExit("No .jpg/.jpeg/.png files matched.")

    start = max(args.start, 0)
    end = args.end if args.end >= 0 else len(files) - 1
    end = min(end, len(files) - 1)

    if start > end:
        raise SystemExit(f"Invalid range: start={start} end={end} (total files={len(files)})")

    selected = files[start:end + 1]

    print(f"Found {len(files)} images, processing {len(selected)} images (index {start}..{end}).")
    print(f"Input: {in_dir}")
    print(f"Output: {out_dir}")
    if args.w and args.h:
        print(f"Resize: {args.w}x{args.h} mode={args.mode}")
    else:
        print("Resize: (skip)")
    print(f"Quality: {args.q}")

    for i, src in enumerate(selected, start=start):
        dst = out_dir / (src.stem + ".webp")
        if dst.exists() and not args.overwrite:
            print(f"[skip] {i}: {src.name} -> {dst.name} (exists)")
            continue
        try:
            convert_one(src, dst, args.w, args.h, args.mode, args.q)
            print(f"[ok]   {i}: {src.name} -> {dst.name}")
        except Exception as e:
            print(f"[fail] {i}: {src.name} ({e})")

if __name__ == "__main__":
    main()
