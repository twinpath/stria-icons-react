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
const StandardDefinitionSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 208H352V304H384C410.469 304 432 282.469 432 256S410.469 208 384 208ZM512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.346 480 576 451.346 576 416V96C576 60.652 547.346 32 512 32ZM268.875 305.203C263.094 334.734 235.188 352.016 195.625 352.016C188.969 352.016 181.969 351.531 174.719 350.531C161.313 348.75 147.406 344.359 135.125 340.469L129.469 338.672C117.875 335.063 111.375 322.734 115 311.141C118.625 299.516 130.781 292.953 142.531 296.672L148.438 298.516C158.969 301.859 170.906 305.641 180.594 306.922C206.563 310.563 224.188 304.438 225.688 296.75C226.969 290.297 221.781 286.172 186.531 277.297L179.062 275.391C157 269.688 105.375 256.312 115.125 206.781C121.875 172.281 158.875 154.5 209.281 161.469C220.562 163.016 232.438 166.391 240.375 168.812C252 172.328 258.594 184.625 255.062 196.25C251.5 207.844 239.281 214.531 227.625 210.906C221.094 208.938 211.5 206.188 203.312 205.062C177.562 201.531 159.781 207.562 158.312 215.25C157.5 219.422 156.562 224.109 190.094 232.797L197.281 234.625C227.75 242.297 278.719 255.125 268.875 305.203ZM384 352H328C314.75 352 304 341.25 304 328V184C304 170.75 314.75 160 328 160H384C436.938 160 480 203.062 480 256S436.938 352 384 352Z" })
  }
));
StandardDefinitionSolid.displayName = "StandardDefinitionSolid";
var StandardDefinition_default = StandardDefinitionSolid;
