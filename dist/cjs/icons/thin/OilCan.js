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
var OilCan_exports = {};
__export(OilCan_exports, {
  default: () => OilCan_default
});
module.exports = __toCommonJS(OilCan_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const OilCanThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M637.875 168.031C634.969 162.975 629.619 160.016 623.943 160.016C622.812 160.016 621.67 160.133 620.531 160.375L450.828 197.984L400.859 167.547C392.781 162.609 383.25 160 373.328 160H264V80H352C356.422 80 360 76.422 360 72S356.422 64 352 64H160C155.578 64 152 67.578 152 72S155.578 80 160 80H248V160H48C21.531 160 0 181.531 0 208V272.297C0 291.359 11.281 308.625 28.75 316.281L96 345.699V374.001C96 397.156 117.531 416 144 416H400.766C414.656 416 427.844 410.797 437.359 401.25L635.75 186.859C640.5 181.734 641.359 174.109 637.875 168.031ZM96 328.236L35.174 301.627C23.525 296.521 16 285.01 16 272.297V208C16 190.355 30.355 176 48 176H96V328.236ZM426.027 389.955C419.57 396.434 410.6 400 400.766 400H144C126.355 400 112 388.336 112 374.001V176H373.328C380.316 176 386.951 177.799 392.537 181.211L448.004 214.998L624.008 175.992L426.027 389.955Z" })
  }
));
OilCanThin.displayName = "OilCanThin";
var OilCan_default = OilCanThin;
