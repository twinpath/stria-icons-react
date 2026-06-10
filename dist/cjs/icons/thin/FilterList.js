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
var FilterList_exports = {};
__export(FilterList_exports, {
  default: () => FilterList_default
});
module.exports = __toCommonJS(FilterList_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilterListThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M329.518 64H22.482C3.582 64 -6.85 85.5 5.07 99.877L112 225.793V368C112 375.828 115.812 383.172 122.252 387.656L202.25 443.641C206.533 446.639 211.273 448 215.906 448C228.34 448 240 438.201 240 423.98V225.793L346.93 99.877C358.85 85.5 348.416 64 329.518 64ZM334.734 89.52L227.805 215.436L224 219.916V423.98C224 429.512 219.268 432 215.906 432C214.324 432 212.816 431.506 211.424 430.531L131.396 374.525C129.269 373.045 128 370.605 128 368V219.916L124.195 215.436L17.387 89.664C15.459 87.338 15.883 85.086 16.578 83.605C17.088 82.521 18.684 80 22.482 80H329.518C333.316 80 334.912 82.521 335.422 83.605C336.117 85.086 336.541 87.338 334.734 89.52ZM424 104H504C508.422 104 512 100.422 512 96S508.422 88 504 88H424C419.578 88 416 91.578 416 96S419.578 104 424 104ZM504 248H328C323.578 248 320 251.578 320 256S323.578 264 328 264H504C508.422 264 512 260.422 512 256S508.422 248 504 248ZM504 408H328C323.578 408 320 411.562 320 416S323.578 424 328 424H504C508.422 424 512 420.438 512 416S508.422 408 504 408Z" })
  }
));
FilterListThin.displayName = "FilterListThin";
var FilterList_default = FilterListThin;
