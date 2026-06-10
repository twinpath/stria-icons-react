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
var Skull_exports = {};
__export(Skull_exports, {
  default: () => Skull_default
});
module.exports = __toCommonJS(Skull_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SkullDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 0C114.594 0 0 100.312 0 224C0 294.094 36.906 356.594 94.5 397.688C104.094 404.594 109.688 415.812 108 427.594L96.172 493.812C94.766 503.406 102.172 512 111.891 512H192V456C192 451.594 195.594 448 200 448H216C220.406 448 224 451.594 224 456V512H288V456C288 451.594 291.594 448 296 448H312C316.406 448 320 451.594 320 456V512H400.109C409.828 512 417.234 503.406 415.828 493.812L404 427.594C402.312 415.906 407.812 404.594 417.5 397.688C475.094 356.594 512 294.094 512 224C512 100.312 397.406 0 256 0ZM160 320C124.688 320 96 291.312 96 256S124.688 192 160 192S224 220.688 224 256S195.312 320 160 320ZM352 320C316.688 320 288 291.312 288 256S316.688 192 352 192S416 220.688 416 256S387.312 320 352 320Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 192C124.688 192 96 220.688 96 256S124.688 320 160 320S224 291.312 224 256S195.312 192 160 192ZM352 192C316.688 192 288 220.688 288 256S316.688 320 352 320S416 291.312 416 256S387.312 192 352 192Z" })
    ]
  }
));
SkullDuotone.displayName = "SkullDuotone";
var Skull_default = SkullDuotone;
