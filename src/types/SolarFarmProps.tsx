export  type SolarFarmProps =  {
        id: number,
        label: string,
        properties: {
            number_of_panels: number,
            panel_size: string,
            row_columns: string,
            number_of_opti_bots: number,
        },
    } | undefined
