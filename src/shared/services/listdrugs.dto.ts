type ListDrugsOutputDto = {
    meta: Meta
    results: Result[]
}

type Meta = {
    disclaimer: string
    terms: string
    license: string
    last_updated: string
    results: Results
}

type Results = {
    skip: number
    limit: number
    total: number
}

type Result = {
    spl_product_data_elements: string[]
    adverse_reactions: string[]
    active_ingredient: string[]
    storage_and_handling: string[]
    controlled_substance: string[]
    abuse: string[]
    purpose: string[]
    indications_and_usage: string[]
    dependence: string[]
    warnings: string[]
    pregnancy: string[]
    do_not_use: string[]
    overdosage: string[]
    ask_doctor: string[]
    ask_doctor_or_pharmacist: string[]
    stop_use: string[]
    pregnancy_or_breast_feeding: string[]
    keep_out_of_reach_of_children: string[]
    dosage_and_administration: string[]
    spl_unclassified_section: string[]
    inactive_ingredient: string[]
    questions: string[]
    contraindications: string[]
    drug_interactions: string[]
    precautions: string[]
    package_label_principal_display_panel: string[]
    set_id: string
    id: string
    effective_time: string
    version: string
    openfda: Openfda
}

type Openfda = {
    application_number: string[]
    brand_name: string[]
    generic_name: string[]
    manufacturer_name: string[]
    product_ndc: string[]
    product_type: string[]
    route: string[]
    substance_name: string[]
    rxcui: string[]
    spl_id: string[]
    spl_set_id: string[]
    package_ndc: string[]
    is_original_packager: boolean[]
    nui: string[]
    pharm_class_epc: string[]
    pharm_class_moa: string[]
    unii: string[]
}

type ListDrugsInputDto = {
    drugName: string;
    skip: number;
    limit: number;
}

export type { ListDrugsInputDto, ListDrugsOutputDto, Result }

