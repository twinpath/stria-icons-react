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
var DiagramStankey_exports = {};
__export(DiagramStankey_exports, {
  default: () => DiagramStankey_default
});
module.exports = __toCommonJS(DiagramStankey_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiagramStankeyThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M40 224H256C270.656 224 284.125 216.016 291.125 203.156L368.937 60.5C373.125 52.781 381.188 48 390 48H600C604.406 48 608 44.422 608 40S604.406 32 600 32H390C375.344 32 361.875 39.984 354.875 52.844L277.062 195.5C272.875 203.219 264.812 208 256 208H40C35.594 208 32 211.578 32 216S35.594 224 40 224ZM608 296C608 291.578 604.406 288 600 288H40C35.594 288 32 291.578 32 296S35.594 304 40 304H186C194.812 304 202.875 308.781 207.062 316.5L284.875 459.156C291.875 472.016 305.344 480 320 480H600C604.406 480 608 476.422 608 472S604.406 464 600 464H320C311.188 464 303.125 459.219 298.938 451.5L221.125 308.844C220.148 307.051 218.779 305.596 217.564 304H600C604.406 304 608 300.422 608 296Z" })
  }
));
DiagramStankeyThin.displayName = "DiagramStankeyThin";
var DiagramStankey_default = DiagramStankeyThin;
