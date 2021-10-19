import { getOrders, getMetals, getSizes, getStyles } from "./database.js"

const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()



const buildOrderListItem = (order) => {
    const foundMetal = metals.find(
    (metal) => {
        if (metal.id === order.metalId) {
            return true
        }
        return false
    }
)
const foundSize = sizes.find(
    (size) => {
        if (size.id === order.sizeId) {
            return true
        }
        return false
    }
)
const foundStyle = styles.find(
    (style) => {
        if (style.id === order.styleId) {
            return true
        }
        return false
    }
)
let totalCost = foundMetal.price
totalCost += foundSize.price
totalCost+= foundStyle.price
const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})
    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
    
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

