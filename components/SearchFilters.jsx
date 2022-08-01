import { Box, Flex, Select } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { filterData, getFilterValues } from '../utils/filterData';

const SearchFilters = () => {
    const [filters, setFilters] = useState(filterData);
    const router = useRouter();
    const SearchProperties = (filterValues) => {
        const path = router.pathname;
        const { query } = router;
        const values = getFilterValues(filterValues);

        values.forEach((item) => {
            if(item.value && filterValues?.[item.name]) {
                query[item.name] = item.value;
            }
        });

        router.push({pathname: path, query});
    };
    return (
        <Flex bg="gray.100" p="4" justifyContent="center">
            {filters.map((filter) => (
                <Box key={filter.queryName}>
                    <Select
                        placeholder={filter.placeholder}
                        w="fit-content"
                        onChange={(e) =>
                            SearchProperties({
                                [filter.queryName]: e.target.value,
                            })
                        }
                    >
                        {filter?.items?.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.name}
                            </option>
                        ))}
                    </Select>
                </Box>
            ))}
        </Flex>
    );
};

export default SearchFilters;
