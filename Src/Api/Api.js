export const GetImages = async (page,limit) => {
    try {
        let result = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
        result = await result.json()
        return result
    } catch (error) {
        return error.message
    }
}