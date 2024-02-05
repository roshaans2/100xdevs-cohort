import {atom, selector} from "recoil"

export const networkAtom = atom({
    key:"networkAtom",
    default:102
})

export const jobsAtom = atom({
    key:"jobskAtom",
    default:20
})

export const notificationsAtom = atom({
    key:"notificationsAtom",
    default:1
})

export const messagingAtom = atom({
    key:"messagingkAtom",
    default:1
})

export const totalNotificationsSelector = selector({
    key:"totalNotificationsSelector",
    get:({get})=>{
        const networkAtomCount = get(networkAtom)
        const jobsAtomCount = get(jobsAtom)
        const notificationsAtomCount = get(notificationsAtom)
        const messagingAtomCount = get(messagingAtom)

        return networkAtomCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount
    }
})

