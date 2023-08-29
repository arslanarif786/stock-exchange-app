import { ref } from 'vue';
import { useRouter } from 'vue-router'

export default function useRoutes() {
const router = useRouter()
const active = ref("")

const routeToDashboard = () => {
  router.push({ path: "/"})
  active.value = "dashboard"
}
const routeToOrders = () => {
  router.push({ path: "/orders"})
  active.value = "orders"
}
const routeToHoldings = () => {
  router.push({ path: "/holdings"})
  active.value = "holdings"
}
const routeToPositions = () => {
  router.push({ path: "/positions"})
  active.value = "positions"
}
const routeToFunds = () => {
  router.push({ path: "/funds"})
  active.value = "funds"
}
const routeToApps = () => {
  router.push({ path: "/apps"})
  active.value = "apps"
}

return {
    active,
    routeToDashboard,
    routeToOrders,
    routeToHoldings,
    routeToPositions,
    routeToFunds,
    routeToApps
 }
}
