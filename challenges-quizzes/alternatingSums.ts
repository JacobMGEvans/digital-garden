function alternatingSums(a: number[]): number[] {
    const evenTeam: Array<number> = a.map((ele:number, i:number) => (i % 2 === 0) ? ele : 0)
    const oddTeam: Array<number> = a.map((ele:number, i:number) => (i % 2 === 1) ?  ele: 0)
    const evenTeamRed = evenTeam.reduce((ag: number, e: number) => ag + e)
    const oddTeamRed = oddTeam.reduce((ag: number, e: number) => ag + e)
    return [evenTeamRed, oddTeamRed]
    }

    const a = [50, 60, 60, 45, 70]
    console.log(alternatingSums(a))
    // alternatingSums(a) = [180, 105]
    const b = [10, 100]
    console.log(alternatingSums(b))