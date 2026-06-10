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
var KnifeKitchen_exports = {};
__export(KnifeKitchen_exports, {
  default: () => KnifeKitchen_default
});
module.exports = __toCommonJS(KnifeKitchen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KnifeKitchenSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M267.507 216.619L4.888 469.862C-3.862 478.236 -0.362 492.486 11.388 496.361C125.26 532.86 250.757 504.361 335.63 422.488L396.629 363.615C403.129 357.365 403.129 347.24 396.629 340.99L267.507 216.619ZM566.25 43.249L531.126 9.375C518.126 -3.125 497.127 -3.125 484.127 9.375L291.881 194.744L403.879 302.866L438.253 275.117C444.503 269.117 448.003 260.993 448.003 252.493V207.994L566.25 88.622C579.25 76.123 579.25 55.748 566.25 43.249ZM443.311 155.308C437.056 161.558 426.951 161.558 420.695 155.308C414.44 149.058 414.44 138.934 420.695 132.684C426.951 126.434 437.056 126.434 443.311 132.684C449.567 138.934 449.567 149.058 443.311 155.308ZM507.31 91.31C501.054 97.56 490.949 97.56 484.694 91.31C478.438 85.06 478.438 74.935 484.694 68.686C490.949 62.436 501.054 62.436 507.31 68.686C513.565 74.935 513.565 85.185 507.31 91.31Z" })
  }
));
KnifeKitchenSolid.displayName = "KnifeKitchenSolid";
var KnifeKitchen_default = KnifeKitchenSolid;
