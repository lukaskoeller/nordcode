export function slugify(text: string, separator = '-') {
    let textToSlugify = text.toString().toLowerCase().trim();

    const sets = [
        { to: 'a', from: '[ÀÁÂÃÅÆĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶ]' },
        { to: 'ae', from: '[Ä]' },
        { to: 'c', from: '[ÇĆĈČ]' },
        { to: 'd', from: '[ÐĎĐÞ]' },
        { to: 'e', from: '[ÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆ]' },
        { to: 'g', from: '[ĜĞĢǴ]' },
        { to: 'h', from: '[ĤḦ]' },
        { to: 'i', from: '[ÌÍÎÏĨĪĮİỈỊ]' },
        { to: 'j', from: '[Ĵ]' },
        { to: 'ij', from: '[Ĳ]' },
        { to: 'k', from: '[Ķ]' },
        { to: 'l', from: '[ĹĻĽŁ]' },
        { to: 'm', from: '[Ḿ]' },
        { to: 'n', from: '[ÑŃŅŇ]' },
        { to: 'o', from: '[ÒÓÔÕØŌŎŐỌỎỐỒỔỖỘỚỜỞỠỢǪǬƠ]' },
        { to: 'oe', from: '[ŒÖ]' },
        { to: 'p', from: '[ṕ]' },
        { to: 'r', from: '[ŔŖŘ]' },
        { to: 's', from: '[ŚŜŞŠ]' },
        { to: 'ss', from: '[ß]' },
        { to: 't', from: '[ŢŤ]' },
        { to: 'u', from: '[ÙÚÛŨŪŬŮŰŲỤỦỨỪỬỮỰƯ]' },
        { to: 'ue', from: '[Ü]' },
        { to: 'w', from: '[ẂŴẀẄ]' },
        { to: 'x', from: '[ẍ]' },
        { to: 'y', from: '[ÝŶŸỲỴỶỸ]' },
        { to: 'z', from: '[ŹŻŽ]' },
        { to: '-', from: "[·/_,:;']" },
    ];

    for (const set of sets) {
        textToSlugify = textToSlugify.replace(new RegExp(set.from, 'gi'), set.to);
    }

    textToSlugify = textToSlugify
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\--+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text

    if (typeof separator !== 'undefined' && separator !== '-') {
        textToSlugify = textToSlugify.replace(/-/g, separator);
    }

    return textToSlugify;
}
