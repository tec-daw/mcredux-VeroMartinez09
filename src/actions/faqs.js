export const addFaq = (text) => {
    return {
        type: 'ADDFAQ',
        payload: text,
    }
};

export const removeFaq = (num) => {
    return {
        type: 'REMOVEFAQ',
        payload: num,
    }
};

export const removeAll = () => {
    return {
        type: 'REMOVEALL',
    }
};

export const updateFAQ = (text) => {
    return {
        type: 'UPDATEFAQ',
        payload: text,
    }
};