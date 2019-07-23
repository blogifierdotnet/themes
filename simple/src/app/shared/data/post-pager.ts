export interface IPager {
    currentPage: number;
    itemsPerPage: number;
    total: number;
    notFound: boolean;
    newer: number;
    showNewer: boolean;
    older: number;
    showOlder: boolean;
    linkToNewer: string;
    linkToOlder: string;
    routeValue: string;
    lastPage: number;
}