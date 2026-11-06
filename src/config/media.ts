/** Wardogs promotional stills (Supabase CDN WebP). Used for hero, tiers, blog cards, and default OG. */
export const WARDOGS_CDN_GALLERY = [
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793915976881-aqqh1y-mr-fitness-wardogs-cheats-are-way-too-powerful-vhfysrbttj8-1058x595-0m55s.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793915956483-6hq6ph-mr-fitness-wardogs-cheats-are-way-too-powerful-vhfysrbttj8-1058x595-0m34s.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793915807550-wh6jqq-mr-fitness-wardogs-cheats-are-way-too-powerful-vhfysrbttj8-1058x595-0m21s.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793915774746-gj39gi-mr-fitness-wardogs-cheats-are-way-too-powerful-vhfysrbttj8-1058x595-0m20s.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793915763313-nwnol9-mr-fitness-wardogs-cheats-are-way-too-powerful-vhfysrbttj8-1058x595-0m14s.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/b15955c0-41e9-482d-a072-e4e797bccc2c/1793709858946-nhlldk-hbs-forces-wardogs-wardogs-cheats-destroying-everyone-with-the-best-wardogs-chea.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/b15955c0-41e9-482d-a072-e4e797bccc2c/1793709837961-92qf25-hbs-forces-wardogs-wardogs-cheats-destroying-everyone-with-the-best-wardogs-chea.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/b15955c0-41e9-482d-a072-e4e797bccc2c/1793709821192-2d9lsa-hbs-forces-wardogs-wardogs-cheats-destroying-everyone-with-the-best-wardogs-chea.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/b15955c0-41e9-482d-a072-e4e797bccc2c/1793709803686-3trm9r-hbs-forces-wardogs-wardogs-cheats-destroying-everyone-with-the-best-wardogs-chea.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/b15955c0-41e9-482d-a072-e4e797bccc2c/1793709783737-r6o4o3-hbs-forces-wardogs-wardogs-cheats-destroying-everyone-with-the-best-wardogs-chea.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/b15955c0-41e9-482d-a072-e4e797bccc2c/1793709761537-nvh85q-niksion-i-got-rich-using-wardogs-cheat-in-season-2-ml1ky2qxita-1035x582-0m15s.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/wardogs/b15955c0-41e9-482d-a072-e4e797bccc2c/1793709728181-pk1c1j-niksion-i-got-rich-using-wardogs-cheat-in-season-2-ml1ky2qxita-1035x582-0m36s.webp',
] as const;

export const WARDOGS_SHOWCASE_IMAGE_ALT =
  'Wardogs cheats gameplay screenshot showing ESP overlay and cheat menu';

/** Default OG / shared fallback: first CDN still */
export const WARDOGS_SHOWCASE_IMAGE_SRC = WARDOGS_CDN_GALLERY[0];

/** Blog listing / post header image by stable index (0–9 for the ten articles). */
export function wardogsBlogCdnImage(index: number): string {
  return WARDOGS_CDN_GALLERY[index % WARDOGS_CDN_GALLERY.length];
}
