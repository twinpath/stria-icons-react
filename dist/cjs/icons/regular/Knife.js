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
var Knife_exports = {};
__export(Knife_exports, {
  default: () => Knife_default
});
module.exports = __toCommonJS(Knife_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KnifeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M477.697 14.625C468.255 5.188 455.732 0 442.38 0H442.302C428.982 0.031 416.458 5.219 407.421 14.25L14.609 390.062C-4.87 409.531 -4.87 441.219 14.609 460.687L51.289 497.328C60.621 506.688 73.503 512 86.933 512C87.294 512 87.669 512 88.044 511.984C101.63 511.609 114.654 505.578 122.861 496.438L286.818 333.984C422.166 338.328 473.789 267.25 493.238 223.906C526.492 149.812 511.937 48.828 477.697 14.625ZM449.416 204.25C422.916 263.266 365.583 290.703 278.767 285.594L268.074 284.969L89.06 462.344L85.714 462.922L85.277 463.422L48.193 424.375L443.74 48.562C459.218 64.047 477.853 140.891 449.416 204.25Z" })
  }
));
KnifeRegular.displayName = "KnifeRegular";
var Knife_default = KnifeRegular;
