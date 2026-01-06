import api from './api';

export interface Manufacturer {
    id: string;
    code?: string;
    category?: string;
    name: string;
    divisions?: string;
    subDivisions?: string;
    address?: string;
    pincode?: string;
    mobileNo?: string;
    email?: string;
    drugLicenseNo?: string;
    dlExpiryDate?: string;
    gstNumber?: string;
    _count?: {
        products: number;
    };
}

export interface CreateManufacturerDto {
    name: string;
    code?: string;
    category?: string;
    divisions?: string;
    subDivisions?: string;
    address?: string;
    pincode?: string;
    mobileNo?: string;
    email?: string;
    drugLicenseNo?: string;
    dlExpiryDate?: string;
    gstNumber?: string;
}

export interface UpdateManufacturerDto extends Partial<CreateManufacturerDto> {}

export interface PaginatedManufacturer {
    data: Manufacturer[];
    meta: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
}

const manufacturerApi = {
    getAll: async (page: number = 1, limit: number = 10, search?: string, sortBy?: string): Promise<PaginatedManufacturer> => {
        const params = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString(),
        });
        if (search) params.append('search', search);
        if (sortBy) params.append('sortBy', sortBy);

        const response = await api.get<PaginatedManufacturer>(`/manufacturers?${params.toString()}`);
        return response.data;
    },

    getById: async (id: string): Promise<Manufacturer> => {
        const response = await api.get<Manufacturer>(`/manufacturers/${id}`);
        return response.data;
    },

    create: async (data: CreateManufacturerDto): Promise<Manufacturer> => {
        const response = await api.post<Manufacturer>('/manufacturers', data);
        return response.data;
    },

    update: async (id: string, data: UpdateManufacturerDto): Promise<Manufacturer> => {
        const response = await api.put<Manufacturer>(`/manufacturers/${id}`, data);
        return response.data;
    },

    delete: async (id: string): Promise<void> => {
        await api.delete(`/manufacturers/${id}`);
    },

    exportToExcel: async (): Promise<void> => {
        const response = await api.get('/manufacturers/export', {
            responseType: 'blob',
        });
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'manufacturers.xlsx');
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);
    }
};

export default manufacturerApi;
