export function getTotalSalaryDepartment(emplList) {
    const totalSalary = emplList.reduce((prev, val) => {
        return prev + +val.salary;
    }, 0);
    return totalSalary;
}

export function getAverageSalaryDepartment(emplList) {
    const averageSalary = Math.round(
        emplList.reduce((prev, val) => {
            return prev + +val.salary;
        }, 0) / emplList.length
    );
    return averageSalary;
}

export function getLowerAverageSalary(emplList) {
    const lowerSalary = emplList.filter(el => el.salary < getAverageSalaryDepartment(emplList));
    return lowerSalary;
}