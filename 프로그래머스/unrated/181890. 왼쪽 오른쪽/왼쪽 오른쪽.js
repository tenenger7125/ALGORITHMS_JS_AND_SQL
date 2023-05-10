function solution(str_list) {
    const [l_index, r_index] = [str_list.indexOf('l'), str_list.indexOf('r')]

    if (l_index < 0 && r_index < 0) return [];
    else if (l_index < 0) return str_list.slice(r_index + 1)
    else if (r_index < 0) return str_list.slice(0, l_index)
    else if (l_index < r_index) return str_list.slice(0, l_index)
    else return str_list.slice(r_index + 1)
}