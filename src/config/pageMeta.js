/** Per-route SEO metadata used by usePageMeta and the prerender script */
export const PAGE_META = {
  '/': {
    title: 'Aseryx · Data licensing for owners with a buyer',
    description: 'Pick the file or the tables. Lock a copy. Get paid. Open access for a set term.',
  },
  '/partners': {
    title: 'Aseryx · Data licensing for owners with a buyer',
    description: 'Pick the file or the tables. Lock a copy. Get paid. Open access for a set term.',
  },
  '/buyers': {
    title: 'Aseryx | For AI Builders',
    description:
      'Access cryptographically verified institutional datasets. Train on high-value data with zero custody risk and proven quality scores.',
  },
  '/datasets': {
    title: 'Aseryx | Datasets',
    description:
      'Browse datasets that passed Aseryx two-layer cryptographic appraisal. Provenance proven. Quality scored. No raw data transmitted.',
  },
  '/blog': {
    title: 'Aseryx · Blog',
    description: 'Writing on private data licenses, custody honesty, and what a quality check is not.',
  },
  '/privacy': {
    title: 'Aseryx | Privacy Policy',
    description: 'Aseryx privacy policy and data handling practices.',
  },
  '/terms': {
    title: 'Aseryx | Terms of Use',
    description: 'Aseryx terms of use.',
  },
};

export function metaForBlogPost(post) {
  return {
    title: `${post.title} | Aseryx Blog`,
    description: post.excerpt,
  };
}

export function metaForDataset(dataset) {
  return {
    title: `${dataset.shortTitle} | Aseryx Datasets`,
    description: dataset.description,
  };
}

export function resolvePageMeta(pathname) {
  if (PAGE_META[pathname]) return PAGE_META[pathname];

  const blogMatch = pathname.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    return null; // resolved at runtime with post data
  }

  const datasetMatch = pathname.match(/^\/dataset\/([^/]+)$/);
  if (datasetMatch) {
    return null; // resolved at runtime with dataset data
  }

  return PAGE_META['/'];
}