<template>
    <n-layout style="width: 100%; height: 100%;">
        <n-modal v-model:show="showModal" class="custom-card" preset="card" :style="{ width: '480px' }" title="Создание доски"
            :bordered="false" size="huge" :segmented="true">
            <template #header-extra>
                Руководитель
            </template>
            <n-form>
                <n-form-item label="Название">
                    <n-input placeholder="введите название" />
                </n-form-item>
                <n-form-item label="Выберите цвет">
                    <n-color-picker :show-alpha="false" />
                </n-form-item>
            </n-form>
            <template #footer>
                <n-button @click="showModal = false; kek = true;" type="primary" style="margin-left: 280px;">
                    Продолжить
                </n-button>
            </template>
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
                <h1 style="font-weight: 500; font-size: 24px;">ДОСТУПНЫЕ ДОСКИ</h1>
                <n-space style="margin-top: 32px;">
                    <NCard hoverable @click="cont">
                        ОП: Отдел Айнура
                    </NCard>
                    <NCard hoverable>
                        ОП: Отдел Максима
                    </NCard>
                    <NCard hoverable>
                        ОП: Отдел Ильнара
                    </NCard>
                    <NCard v-show="kek" hoverable style="background-color: red;">
                        Новая доска
                    </NCard>
                </n-space>
                <n-button @click="showModal = true" type="primary" style="margin-top: 40px;">
                    Добавить доску
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
import { NIcon, NLayout, NLayoutFooter, NLayoutSider, NLayoutHeader, NMenu, NSpace, NCard, NButton, NModal, NForm, NFormItem, NInput, NColorPicker } from 'naive-ui'
import {
    BookOutline as BookIcon,
    PersonOutline as PersonIcon,
    WineOutline as WineIcon
} from '@vicons/ionicons5'

function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
}

const showModal = ref(false);
const kek = ref(false);

const router = useRouter();
const cont = () => {
    router.push('/app/100701')
}

const menuOptions = [
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
</script>