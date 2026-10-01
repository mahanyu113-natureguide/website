# Mahanyu Nature Guide

A responsive, photo-led website for Mahanyu’s guided walks in the Usambara Mountains, Tanzania.

**Live site:** https://mahanyu113-natureguide.github.io/website/

## Publish and preview

GitHub Pages serves the root of the `main` branch. Push changes to `main` to publish. There is no build step and no package installation required.

To preview locally:

```sh
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Edit the site

- `index.html`: page content, trek information, email enquiry links, and gallery.
- `styles.css`: the forest-green, ivory and gold design, including mobile layouts and reduced-motion support.
- `script.js`: mobile navigation and the keyboard-accessible gallery dialog.
- `assets/photos/`: optimized WebP versions of the original photos supplied by Mahanyu’s friend. The generated design mockup is not used as site content.
- `assets/favicon.svg`: mountain favicon.

Booking links open an email to **mahanyu113@gmail.com**. The main enquiry button includes a short template for travel dates, group size and interests. No booking is confirmed by the website, and there is no form backend.

The trek durations, difficulty levels and starting prices are retained from the previous website. Confirm any updates with Mahanyu before changing them.

## Photography

The original photos remain in the parent project folder. The website uses resized WebP copies, with 640px and 1280px variants and an additional 1920px hero image. Small originals are not enlarged. Existing photo credits are retained in the files.

| Photo basename   | Original supplied filename                      | Use                            |
| ---------------- | ----------------------------------------------- | ------------------------------ |
| `sunset`         | WhatsApp Image 2026-10-01 at 22.41.40.jpeg      | Hero                           |
| `forest-walk`    | WhatsApp Image 2026-10-01 at 22.41.41 (1).jpeg  | Village & Nature Day, gallery  |
| `viewpoint`      | WhatsApp Image 2026-10-01 at 22.41.41.jpeg      | Irente Viewpoint Hike, gallery |
| `mahanyu`        | WhatsApp Image 2026-10-01 at 22.41.38.jpeg      | Guide introduction             |
| `chameleon`      | WhatsApp Image 2026-10-01 at 22.41.37.jpeg      | Wildlife gallery               |
| `ridge-walk`     | WhatsApp Image 2026-10-01 at 22.41.41 (5).jpeg  | Lushoto Ridge Walk             |
| `sunset-friends` | WhatsApp Image 2026-10-01 at 22.41.41 (10).jpeg | Gallery                        |

When replacing photos, preserve the subject, update the HTML dimensions and alt text, and supply the appropriate responsive sizes. The older files in `assets/images/` are retained but no longer referenced by the page.

## Checks before publishing

- Check the layout at desktop, tablet and narrow phone widths.
- Open the mobile menu, follow a link, and close it with Escape.
- Open gallery photos with keyboard or pointer; verify Escape and the close button return focus to the photo link.
- Check trek enquiry links, the main email template, Instagram, and page anchors.
- Verify photos load, the page has no horizontal overflow, and the console has no errors.
- Check reduced-motion mode and visible keyboard focus.
