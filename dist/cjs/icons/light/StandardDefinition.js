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
var StandardDefinition_exports = {};
__export(StandardDefinition_exports, {
  default: () => StandardDefinition_default
});
module.exports = __toCommonJS(StandardDefinition_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StandardDefinitionLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.346 480 576 451.346 576 416V96C576 60.652 547.346 32 512 32ZM544 416C544 433.645 529.645 448 512 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H512C529.645 64 544 78.355 544 96V416ZM384 160H320C311.156 160 304 167.156 304 176V336C304 344.844 311.156 352 320 352H384C436.938 352 480 308.938 480 256S436.938 160 384 160ZM384 320H336V192H384C419.281 192 448 220.703 448 256S419.281 320 384 320ZM195.625 240.391L187.312 238.391C144.375 227.875 142.469 220.25 144.469 210.625C147.437 196.266 173.344 188.906 206.25 193.219C213.999 194.234 223.344 196.344 235.562 199.875C244.125 202.25 252.906 197.422 255.375 188.922C257.812 180.437 252.906 171.562 244.437 169.125C230.594 165.141 219.781 162.719 210.375 161.5C157.969 154.641 119.938 171.422 113.156 204.125C103.469 250.797 153.062 262.953 179.688 269.484L188.219 271.531C231.75 281.891 242.281 288.031 239.531 301.375C236.531 315.734 210.531 323.047 177.688 318.766C165.719 317.266 151.625 313.031 139.188 309.312L132.531 307.328C123.969 304.797 115.156 309.688 112.656 318.156S115 335.531 123.469 338.016L129.999 339.969C143.625 344.047 159.062 348.688 173.625 350.5C181.375 351.516 188.812 352.016 195.875 352.016C236.531 352.016 265.062 335.734 270.844 307.875C280.656 260.641 231.5 248.938 195.625 240.391Z" })
  }
));
StandardDefinitionLight.displayName = "StandardDefinitionLight";
var StandardDefinition_default = StandardDefinitionLight;
