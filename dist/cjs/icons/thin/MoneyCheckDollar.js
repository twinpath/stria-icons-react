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
var MoneyCheckDollar_exports = {};
__export(MoneyCheckDollar_exports, {
  default: () => MoneyCheckDollar_default
});
module.exports = __toCommonJS(MoneyCheckDollar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MoneyCheckDollarThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528 64H48C21.49 64 0 85.49 0 112V400C0 426.51 21.49 448 48 448H528C554.51 448 576 426.51 576 400V112C576 85.49 554.51 64 528 64ZM560 400C560 417.645 545.645 432 528 432H48C30.355 432 16 417.645 16 400V112C16 94.355 30.355 80 48 80H528C545.645 80 560 94.355 560 112V400ZM504 304H424C419.594 304 416 307.578 416 312S419.594 320 424 320H504C508.406 320 512 316.422 512 312S508.406 304 504 304ZM344 304H264C259.594 304 256 307.578 256 312S259.594 320 264 320H344C348.406 320 352 316.422 352 312S348.406 304 344 304ZM504 208H264C259.594 208 256 211.578 256 216S259.594 224 264 224H504C508.406 224 512 220.422 512 216S508.406 208 504 208ZM130.016 248.234L123.188 246.422C90.531 237.547 81.5 229.906 84.516 213.719C88.125 194.484 115.062 189.516 140.109 193.141C146.688 194.094 154.453 196.047 164.563 199.281C168.734 200.578 173.266 198.297 174.625 194.094C175.969 189.891 173.641 185.391 169.438 184.031C158.469 180.531 149.875 178.391 142.406 177.297C140.189 176.98 138.146 176.938 136 176.736V152C136 147.578 132.422 144 128 144S120 147.578 120 152V176.289C92.053 177.57 72.721 189.912 68.797 210.766C62.125 246.422 97.734 256.094 119 261.859L125.938 263.703C159.625 272.609 175.094 278.906 171.469 298.281C167.859 317.516 140.937 322.469 115.844 318.859C105.703 317.438 94 313.547 83.672 310.109L78.484 308.391C74.297 307.031 69.766 309.312 68.391 313.516S69.312 322.234 73.516 323.609L78.625 325.297C89.594 328.938 102.047 333.078 113.594 334.703C115.828 335.023 117.834 334.977 120 335.182V360C120 364.422 123.578 368 128 368S136 364.422 136 360V335.516C163.805 334.193 183.289 322.021 187.188 301.219C193.969 265.125 158.516 255.766 130.016 248.234Z" })
  }
));
MoneyCheckDollarThin.displayName = "MoneyCheckDollarThin";
var MoneyCheckDollar_default = MoneyCheckDollarThin;
