<template>
    <n-layout style="width: 100%; height: 100%;">
        <n-modal v-model:show="showModal" class="custom-card" preset="card" :style="{ width: '480px' }"
            title="Добавление задачи" :bordered="false" size="huge" :segmented="true">
            <template #header-extra>
                Руководитель
            </template>
            <n-form>
                <n-form-item label="Название">
                    <n-input placeholder="введите название" />
                </n-form-item>
                <n-form-item label="Доп. информация о задании">
                    <n-input placeholder="введите информацию" />
                </n-form-item>
                <n-form-item label="Установите дедлайн">
                    <n-date-picker type="date" clearable />
                </n-form-item>
                <n-form-item label="Выберите участников">
                    <n-transfer source-title="Сотрудники" target-title="Выбранные" ref="transfer" v-model:value="value"
                        :options="options" />
                </n-form-item>
            </n-form>
            <template #footer>
                <n-button @click="showModal = false" type="primary" style="margin-left: 280px;">
                    Продолжить
                </n-button>
            </template>
        </n-modal>
        <n-modal v-model:show="showModal2" class="custom-card" preset="card" :style="{ width: '940px' }"
            title="Задача 1" :bordered="false" size="huge" :segmented="true">
            <template #header-extra>
                Редактировать
            </template>
            <n-form>
                <p style="font-size: 18px; margin-bottom: 20px;">Описание задачи</p>
                <NSpace style="margin-bottom: 20px;">
                    <n-statistic label="Приступили к работе" :value="12">
                        <template #prefix>
                            <n-icon>
                                <PersonIcon />
                            </n-icon>
                        </template>
                        <template #suffix>
                            / 30
                        </template>
                    </n-statistic>
                    <n-statistic label="Отправлено сообщений">
                        1 345
                    </n-statistic>
                </NSpace>
                <n-table :bordered="false" :single-line="false">
                    <thead>
                        <tr>
                            <th>Свободные</th>
                            <th>Сегментация</th>
                            <th>Выявление потребностей</th>
                            <th>Презентация</th>
                            <th>Цена озвучена</th>
                            <th>Оплата</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>12</td>
                            <td>23</td>
                            <td>64</td>
                            <td>10</td>
                            <td>7</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                        </tr>
                    </tbody>
                </n-table>
                <n-data-table style="margin-bottom: 20px;" :columns="columns" :data="data" :pagination="false" :bordered="false" />
                <p>Изменить этап</p>
                <n-select :options="options2" />
            </n-form>
        </n-modal>
        <n-layout-header bordered>
            <p style="margin-left: 50px">ПАРТА - система управления проектами</p>
        </n-layout-header>
        <n-layout has-sider style="width: 100%; height: 100%;">
            <n-layout-sider bordered show-trigger collapse-mode="width" :collapsed-width="64" :width="240"
                :native-scrollbar="false">
                <n-menu :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions" />
            </n-layout-sider>
            <n-layout style="padding: 40px; background-color: #edeef0;">
                <h1 style="font-weight: 500; font-size: 24px;">ОП: Отдел айнура</h1>
                <n-space style="margin-top: 32px;">
                    <NCard closable title="Сделать" style="width: 240px; height: 580px;">
                        <n-space vertical>
                            <n-button @click="showModal2 = true;">Задача 1</n-button>
                            <n-button>Задача 2</n-button>
                        </n-space>
                    </NCard>
                    <NCard closable title="В работе" style="width: 240px; height: 580px;">
                        <n-space vertical>
                            <n-button>Задача 3</n-button>
                            <n-button>Задача 4</n-button>
                            <n-button>Задача 5</n-button>
                        </n-space>
                    </NCard>
                    <NCard closable title="Готово" style="width: 240px; height: 580px;">
                        <n-space vertical>
                            <n-button>Задача 6</n-button>
                        </n-space>
                    </NCard>

                </n-space>
                <n-button @click="showModal = true" secondary type="primary" style="margin-top: 40px;">
                    Добавить лист
                </n-button>
            </n-layout>
        </n-layout>
        <n-layout-footer bordered>
            Белоглазкин А.
        </n-layout-footer>
    </n-layout>
</template>

<script setup lang="ts">
import { h, defineComponent, ref, Component } from 'vue'
import { NSelect, NIcon, NLayout, NLayoutFooter, NLayoutSider, NLayoutHeader, NMenu, NSpace, NCard, NButton, NModal, NForm, NFormItem, NInput, NColorPicker, NDatePicker, NTransfer, NStatistic, NTable, DataTableColumns, NDataTable } from 'naive-ui'
import {
    BookOutline as BookIcon,
    PersonOutline as PersonIcon,
    WineOutline as WineIcon
} from '@vicons/ionicons5'

function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
}

const showModal = ref(false);
const showModal2 = ref(false);

const menuOptions = [
    {
        label: 'Вернуться',
        key: 'escape-acc'
    },
    {
        label: 'Мои доски',
        key: 'my-boards',
        icon: renderIcon(BookIcon)
    },
    {
        label: 'Управление',
        key: 'p-control',
        icon: renderIcon(BookIcon),
        children: [
            {
                type: 'group',
                label: 'Сотрудники',
                key: 'people',
                children: [
                    {
                        label: 'Добавить пользователя',
                        key: 'add-p',
                        icon: renderIcon(PersonIcon)
                    },
                    {
                        label: 'Удалить пользователя',
                        key: 'remove-p',
                        icon: renderIcon(PersonIcon)
                    }
                ]
            }
        ]
    },
    {
        label: 'Выйти из аккаунта',
        key: 'escape-acc'
    }
]

function createOptions() {
    return Array.from({ length: 100 }).map((v, i) => ({
        label: 'Сотрудник ' + i + 1,
        value: i,
        disabled: i % 5 === 0
    }))
}

function createValues() {
    return Array.from({ length: 50 }).map((v, i) => i)
}

const options = createOptions()
const value = ref(createValues())

type Song = {
    no: number
    title: string
    length: string
}

const createColumns = ({
    play
}: {
    play: (row: Song) => void
}): DataTableColumns<Song> => {
    return [
        {
            title: 'Рейтинг',
            key: 'no'
        },
        {
            title: 'Сотрудник',
            key: 'title'
        },
        {
            title: 'Активные статусы',
            key: 'length'
        },
        {
            title: 'Действие',
            key: 'actions',
            render(row) {
                return h(
                    NButton,
                    {
                        strong: true,
                        tertiary: true,
                        size: 'small',
                        onClick: () => play(row)
                    },
                    { default: () => 'Закрыть задачу' }
                )
            }
        }
    ]
}

const data: Song[] = [
    { no: 1, title: 'Сотрудник 6', length: '78%' },
    { no: 2, title: "Сотрудник 3", length: '65%' },
    { no: 3, title: 'Сотрудник 4', length: '44%' }
]

const columns = createColumns({
    play(row: Song) {
        let r = useFetch('bs/getStats', opts={value, uuid, options});
        options = r;
    }
})

const options2 = [
        {
          label: "Сделать",
          value: 'crm1',
          disabled: true
        },
        {
          label: 'В работе',
          value: 'crm2'
        },
        {
          label: 'Готово',
          value: 'crm3'
        },
]
</script>