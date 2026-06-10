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
var Tree_exports = {};
__export(Tree_exports, {
  default: () => Tree_default
});
module.exports = __toCommonJS(Tree_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TreeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M439.607 391.586L370.631 311.986H385.828C411.422 311.986 425.328 282.799 409.015 263.484L348.158 191.98H358.924C380.203 191.98 391.828 169.479 378.203 154.666L243.334 8.156C238.334 2.719 231.178 0 224.021 0S209.711 2.719 204.711 8.156L69.933 154.666C56.342 169.479 67.933 191.98 89.215 191.98H99.949L39.029 263.484C22.717 282.799 36.623 311.986 62.215 311.986H77.414L8.435 391.586C-10.563 413.494 4.625 447.996 33.123 447.996H208V496C208 504.844 215.156 512 224 512S240 504.844 240 496V447.996C330.303 447.996 414.828 447.996 414.828 447.996C443.42 447.996 458.513 413.4 439.607 391.586ZM414.828 415.996L240 416V358.625L283.312 315.312C289.562 309.062 289.562 298.937 283.312 292.688S266.937 286.438 260.687 292.688L240 313.375V176C240 167.156 232.844 160 224 160S208 167.156 208 176V256.01L188.797 230.406C183.5 223.344 173.453 221.875 166.406 227.188C159.328 232.5 157.89 242.531 163.203 249.594L208 309.322V416.002L32.863 416.006C32.67 415.879 32.152 415.205 32.025 414.289C31.93 413.596 32.072 413.174 32.619 412.541L101.597 332.943L147.488 279.986H77.414L67.01 279.984L124.306 212.732L169.252 159.98H108.525L224.023 34.428L339.601 159.98H278.902L323.789 212.721L381.039 279.986H300.556L346.447 332.943L415.426 412.543C415.883 413.07 416.082 413.461 415.972 414.244C415.842 415.184 415.314 415.873 414.828 415.996Z" })
  }
));
TreeLight.displayName = "TreeLight";
var Tree_default = TreeLight;
