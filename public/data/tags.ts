import tagsDataSource from "./tags.json";

interface Tag {
  label: string;
  value: string;
}

const platformTags = tagsDataSource.platforms as unknown as Tag[];
const languageTags = tagsDataSource.languages as unknown as Tag[];
const technologyTags = tagsDataSource.technologies as unknown as Tag[];

export { platformTags, languageTags, technologyTags };
