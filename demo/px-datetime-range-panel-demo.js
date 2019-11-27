/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Imports for this component */
/* Demo DOM module */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-demo/px-demo-header.js';
import 'px-demo/px-demo-api-viewer.js';
import 'px-demo/px-demo-footer.js';
import 'px-demo/px-demo-configs.js';
import 'px-demo/px-demo-props.js';
import 'px-demo/px-demo-interactive.js';
import 'px-demo/px-demo-component-snippet.js';
import 'px-demo/px-demo-code-editor.js';
import '../px-datetime-range-panel.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <!-- Header -->
    <px-demo-header module-name="px-datetime-range-panel" description="The px-datetime-range-panel component includes various elements used for structuring responsive layouts.
    		This component allows the user to select a date and time range precisely to the second or millisecond.
          The main use of this component is to be used in the px-rangepicker." desktop="">
    </px-demo-header>

    <!-- Interactive -->
    <px-demo-interactive>
      <!-- Configs -->
      <px-demo-configs slot="px-demo-configs" configs="[[configs]]" props="{{props}}" chosen-config="{{chosenConfig}}"></px-demo-configs>

      <!-- Props -->
      <px-demo-props slot="px-demo-props" props="{{props}}" config="[[chosenConfig]]" class="flex__item flex__item--msfix"></px-demo-props>

      <px-demo-code-editor slot="px-demo-code-editor" props="{{props}}" config="[[chosenConfig]]"></px-demo-code-editor>

      <!-- Component ---------------------------------------------------------->
      <px-demo-component slot="px-demo-component">
          <p class="u-mb0">Events fired: <strong>from-moment-changed</strong> and <strong>to-moment-changed</strong></p>
          <p class="zeta u-mt0">See API Reference below for more details</p>
          <p class="u-mb++">Submitted range: <strong>{{props.fromMoment.value}}</strong> To: <strong>{{props.toMoment.value}}</strong></p>

        <div style="height: 430px; width: 630px;">
          <px-datetime-range-panel style="position: relative;" from-moment="{{props.fromMoment.value}}" to-moment="{{props.toMoment.value}}" time-format="{{props.timeFormat.value}}" show-buttons="{{props.showButtons.value}}" block-future-dates="{{props.blockFutureDates.value}}" block-past-dates="{{props.blockPastDates.value}}" hide-time="{{props.hideTime.value}}" time-zone="{{props.timeZone.value}}" hide-presets="{{props.hidePresets.value}}" min-date="{{props.minDate.value}}" max-date="{{props.maxDate.value}}">
          </px-datetime-range-panel>
        </div>
      </px-demo-component>
      <!-- END Component ------------------------------------------------------>

      <px-demo-component-snippet slot="px-demo-component-snippet" element-properties="{{props}}" element-name="px-datetime-range-panel" links-includes="[[linksIncludes]]" suppress-property-values="[[suppressPropertyValues]]">
      </px-demo-component-snippet>
    </px-demo-interactive>

    <!-- API Viewer -->
    <px-demo-api-viewer source="px-datetime-range-panel"></px-demo-api-viewer>

    <!-- Footer -->
    <px-demo-footer></px-demo-footer>
`,

  is: 'px-datetime-range-panel-demo',

  properties: {

    /**
     * Note: The actual data/values for `props` are placed in `this.demoProps`
     * to create a static reference that Polymer shouldn't overwrite.
     *
     * On object containing all the properties the user can configure for this
     * demo. Usually a pretty similar copy of the component's `properties` block
     * with some additional sugar added to describe what kind of input the
     * user will be shown and how that input should be configured.
     *
     * Note that `value` for each property is the default that will be set
     * unless a config from `configs` is applied by default.
     *
     *
     * @property demoProps
     * @type {Object}
     */
    props: {
      type: Object,
      value: function(){
        var props =  this.demoProps;
            props.timeZone.inputLocalCandidates = Px.moment.tz.names();
          return props;
        }
    },
    suppressPropertyValues: {
      type: Array,
      value: function() { return ['toMoment', 'fromMoment']; }
    },

    /**
     * An array of pre-configured `props` that can be used to provide the user
     * with a set of common examples. These configs will be made available
     * as a set of tabs the user can click that will automatically change
     * the `props` to specific values.
     *
     * @property demoProps
     * @type {Array}
     */
    configs: {
      type: Array,
      value: function(){
        return [
          { configName: "24 hour",
            configReset: true },

          { configName: "Past dates",
            timeFormat: "hh:mm:ss A",
            showButtons: false,
            blockFutureDates: true,
            blockPastDates: false,
            hideTime: false,
            timeZone: "UTC",
            hidePresets: false,
            minDate: Px.moment().subtract(3, 'month'),
            maxDate: Px.moment().add(3, 'month'),
            fromMoment: Px.moment().subtract(8, 'day').startOf('day'),
            toMoment: Px.moment().subtract(1, 'day').startOf('day'),
          },

          { configName: "Only calendar",
            timeFormat: "hh:mm:ss A",
            showButtons: false,
            blockFutureDates: false,
            blockPastDates: false,
            hideTime: true,
            timeZone: "America/Los_Angeles",
            hidePresets: true,
            minDate: Px.moment().subtract(3, 'month'),
            maxDate: Px.moment().add(3, 'month'),
            fromMoment: Px.moment().subtract(8, 'day').startOf('day'),
            toMoment: Px.moment().subtract(1, 'day').startOf('day'),
          }
        ]
      }
    }
  },

  /**
   * A reference for `this.props`. Read the documentation there.
   */
  demoProps: {

    hideTime: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },

    hidePresets: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },

    showButtons: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },

    blockFutureDates: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },

    blockPastDates: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },

    timeFormat: {
      type: String,
      defaultValue: 'HH:mm:ss',
      inputType: 'text',
      inputPlaceholder: 'HH:mm:ss',
      readonly: false
    },

    timeZone: {
      type: String,
      defaultValue: 'UTC',
      inputType: 'typeahead',
      inputPlaceholder: 'UTC'
    },

    minDate: {
      type: String,
      defaultValue: Px.moment().subtract(3, 'month').toISOString(),
      inputType: 'text',
      inputPlaceholder: 'ISOString'
    },

    maxDate: {
      type: String,
      defaultValue: Px.moment().add(3, 'month').toISOString(),
      inputType: 'text',
      inputPlaceholder: 'ISOString'
    },

    fromMoment: {
      type: Object,
      defaultValue: null
    },

    toMoment: {
      type: Object,
      defaultValue: null
    }

  },

  ready: function () {
    this.linksIncludes = ['px-datetime-common/px-polygit-imports-datetime.html'];
  }
});
