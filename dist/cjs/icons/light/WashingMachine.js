var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var WashingMachine_exports = {};
__export(WashingMachine_exports, {
  default: () => WashingMachine_default
});
module.exports = __toCommonJS(WashingMachine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WashingMachineLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 0H96C42.98 0 0 42.98 0 96V448C0 483.348 28.654 512 64 512H384C419.346 512 448 483.348 448 448V96C448 42.98 405.02 0 352 0ZM416 448C416 465.645 401.645 480 384 480H64C46.355 480 32 465.645 32 448V96C32 60.711 60.711 32 96 32H352C387.289 32 416 60.711 416 96V448ZM192.062 120C205.277 120 216 109.25 216 96S205.277 72 192.062 72C178.723 72 168 82.75 168 96S178.723 120 192.062 120ZM120 96C120 82.75 109.307 72 96 72C82.818 72 72 82.75 72 96S82.818 120 96 120C109.307 120 120 109.25 120 96ZM224 160C144.48 160 80.018 224.5 80.018 304S144.48 448 224 448S367.982 383.5 367.982 304S303.52 160 224 160ZM224 416C167.025 416 120.379 373.07 113.428 317.938C135.881 325.539 161.107 322.684 181.141 309C193.609 317.562 208.609 322.312 224 322.312C239.406 322.312 254.438 317.562 266.922 308.937C279.219 317.406 293.703 322.062 308.922 322.281C317.814 322.102 326.414 320.426 334.6 317.672C327.766 372.93 281.066 416 224 416ZM309.359 290.281C297.578 290.125 286.547 285.344 278.297 276.844C273.766 272.219 266.875 270.75 260.797 273.25C258.375 274.25 256.281 275.781 254.656 277.719C238.406 293.906 208.641 293.687 192.734 277.094C189.734 273.969 185.594 272.188 181.266 272.156C176.828 272.812 172.766 273.875 169.75 276.969C154.771 292.344 131.582 293.625 114.207 282.352C124.33 230.93 169.664 192 224 192C278.578 192 324.016 231.297 333.865 283.059C326.568 287.5 318.053 289.559 309.359 290.281Z" })
  }
));
WashingMachineLight.displayName = "WashingMachineLight";
var WashingMachine_default = WashingMachineLight;
