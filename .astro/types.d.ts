declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	// TODO: Remove this when having this fallback is no longer relevant. 2.3? 3.0? - erika, 2023-04-04
	/**
	 * @deprecated
	 * `astro:content` no longer provide `image()`.
	 *
	 * Please use it through `schema`, like such:
	 * ```ts
	 * import { defineCollection, z } from "astro:content";
	 *
	 * defineCollection({
	 *   schema: ({ image }) =>
	 *     z.object({
	 *       image: image(),
	 *     }),
	 * });
	 * ```
	 */
	export const image: never;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S | ((context: SchemaContext) => S);
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	const entryMap: {
		"blog": {
"2019-10-15-vuepress-tutorial-basic.md": {
  id: "2019-10-15-vuepress-tutorial-basic.md",
  slug: "2019-10-15-vuepress-tutorial-basic",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"2019-10-29-vue-sourcecode-prototype.md": {
  id: "2019-10-29-vue-sourcecode-prototype.md",
  slug: "2019-10-29-vue-sourcecode-prototype",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"2020-03-09-javascript-is-plain-object.md": {
  id: "2020-03-09-javascript-is-plain-object.md",
  slug: "2020-03-09-javascript-is-plain-object",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"2020-05-06-learning-vue-reactivity.md": {
  id: "2020-05-06-learning-vue-reactivity.md",
  slug: "2020-05-06-learning-vue-reactivity",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"2021-04-27-why-my-timer-delay.md": {
  id: "2021-04-27-why-my-timer-delay.md",
  slug: "2021-04-27-why-my-timer-delay",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"2021-06-01-promise-a-plus-translate.md": {
  id: "2021-06-01-promise-a-plus-translate.md",
  slug: "2021-06-01-promise-a-plus-translate",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"career-start.md": {
  id: "career-start.md",
  slug: "career-start",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
