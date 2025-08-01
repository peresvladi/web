function removingSpaces(incoming) {
    let result = incoming;

    while(result.charAt(0) === ' ')
        {
            result = result.substr(1);
        }
    return result
}