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
var LocationCrosshairs_exports = {};
__export(LocationCrosshairs_exports, {
  default: () => LocationCrosshairs_default
});
module.exports = __toCommonJS(LocationCrosshairs_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LocationCrosshairsThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 160C202.98 160 160 202.98 160 256S202.98 352 256 352S352 309.019 352 256S309.02 160 256 160ZM256 336C211.889 336 176 300.113 176 256S211.889 176 256 176C300.113 176 336 211.887 336 256S300.113 336 256 336ZM504 248H448C447.846 248 447.756 248.156 447.604 248.164C443.566 148.406 363.596 68.433 263.836 64.398C263.844 64.242 264 64.156 264 64V8C264 3.594 260.422 0 256 0S248 3.594 248 8V64C248 64.156 248.156 64.242 248.164 64.398C148.404 68.433 68.434 148.406 64.396 248.164C64.244 248.156 64.154 248 64 248H8C3.578 248 0 251.594 0 256S3.578 264 8 264H64C64.154 264 64.244 263.844 64.396 263.836C68.434 363.594 148.404 443.566 248.164 447.601C248.156 447.758 248 447.844 248 448V504C248 508.406 251.578 512 256 512S264 508.406 264 504V448C264 447.844 263.844 447.758 263.836 447.601C363.596 443.566 443.566 363.594 447.604 263.836C447.756 263.844 447.846 264 448 264H504C508.422 264 512 260.406 512 256S508.422 248 504 248ZM256 432C158.953 432 80 353.047 80 256S158.953 80 256 80S432 158.953 432 256S353.047 432 256 432Z" })
  }
));
LocationCrosshairsThin.displayName = "LocationCrosshairsThin";
var LocationCrosshairs_default = LocationCrosshairsThin;
