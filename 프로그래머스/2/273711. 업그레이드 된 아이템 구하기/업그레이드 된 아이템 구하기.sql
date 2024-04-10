select ii2.item_id, ii2.item_name, ii2.rarity
from item_info ii
    inner join item_tree it
        on ii.item_id = it.parent_item_id
    inner join item_info ii2
        on it.item_id = ii2.item_id
where ii.rarity = 'RARE'
order by ii2.item_id desc