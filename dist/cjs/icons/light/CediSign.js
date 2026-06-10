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
var CediSign_exports = {};
__export(CediSign_exports, {
  default: () => CediSign_default
});
module.exports = __toCommonJS(CediSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CediSignLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M325.803 380.062C296.092 404.301 260.238 415.717 224.506 415.703V96.309C260.233 96.297 296.083 107.713 325.803 131.938C332.681 137.469 342.785 136.469 348.378 129.656C353.987 122.812 352.968 112.719 346.107 107.125C310.429 78.092 267.392 64.383 224.506 64.383V16C224.506 7.156 217.331 0 208.464 0C199.597 0 192.422 7.156 192.422 16V67.164C154.304 73.631 117.739 90.945 88.383 120.25C52.021 156.5 32 204.719 32 256S52.021 355.5 88.383 391.75C117.761 421.051 154.29 438.68 192.422 445.146V496C192.422 504.844 199.597 512 208.464 512C217.331 512 224.506 504.844 224.506 496V448.246C224.516 448.246 224.527 448.25 224.537 448.25C267.416 448.25 310.435 433.906 346.107 404.875C352.968 399.281 353.987 389.187 348.378 382.344C342.785 375.5 332.681 374.469 325.803 380.062ZM111.067 369.125C80.769 338.906 64.084 298.75 64.084 256S80.769 173.094 111.067 142.875C134.169 119.84 162.595 105.51 192.422 99.396V412.613C162.589 406.496 134.159 392.162 111.067 369.125Z" })
  }
));
CediSignLight.displayName = "CediSignLight";
var CediSign_default = CediSignLight;
