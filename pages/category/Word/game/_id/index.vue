<template>
  <client-only>
    <Scene>
      <Property name="clearColor" color="#FFF"></Property>
      <Camera type="arcRotate"></Camera>
      <HemisphericLight>
        <property name="intensity" :float="2"></property>
      </HemisphericLight>
      <Entity :scaling="[5, 5, 5]">
        <Animation property="rotation.y" :duration="5" :end="-Math.PI * 2"></Animation>
          <Entity :rotation="[-Math.PI / 2, 0, 0]" :position="[0, 0, -0.15]">
            <ExtrudePolygon :options="{ shape: [$vector([0.133, 0, 0.5]), $vector([0.346, 0, 0.5]), $vector([0, 0, -0.1]), $vector([0, 0, 0.269])], depth: 0.3, sideOrientation: BABYLON.Mesh.DOUBLESIDE }">
              <Material diffuse="#34495E" specular="#34495E"></Material>
            </ExtrudePolygon>
            <ExtrudePolygon :options="{ shape: [$vector([0.346, 0, 0.5]), $vector([0.577, 0, 0.5]), $vector([0, 0, -0.5]), $vector([0, 0, -0.1])], depth: 0.3, sideOrientation: BABYLON.Mesh.DOUBLESIDE }">
              <Material diffuse="#41B883" specular="#41B883"></Material>
            </ExtrudePolygon>
          </Entity>
        <Entity :scaling="[-1, 1, 1]">
          <Entity :rotation="[-Math.PI / 2, 0, 0]" :position="[0, 0, -0.15]">
            <ExtrudePolygon :options="{ shape: [$vector([0.133, 0, 0.5]), $vector([0.346, 0, 0.5]), $vector([0, 0, -0.1]), $vector([0, 0, 0.269])], depth: 0.3, sideOrientation: BABYLON.Mesh.DOUBLESIDE }">
                <Material diffuse="#34495E" specular="#34495E"></Material>
            </ExtrudePolygon>
            <ExtrudePolygon :options="{ shape: [$vector([0.346, 0, 0.5]), $vector([0.577, 0, 0.5]), $vector([0, 0, -0.5]), $vector([0, 0, -0.1])], depth: 0.3, sideOrientation: BABYLON.Mesh.DOUBLESIDE }">
                <Material diffuse="#41B883" specular="#41B883"></Material>
            </ExtrudePolygon>
          </Entity>
        </Entity>
      </Entity>
    </Scene>
  </client-only>
</template>

<script>
import { Vue, Component, Prop } from 'nuxt-property-decorator'


@Component
export default class Hot extends Vue{
  layout() { return 'game' }
}
</script>