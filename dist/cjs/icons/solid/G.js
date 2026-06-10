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
var G_exports = {};
__export(G_exports, {
  default: () => G_default
});
module.exports = __toCommonJS(G_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 480C164.172 480 107.906 456.688 65.609 414.375C23.297 372.094 0 315.844 0 256S23.297 139.906 65.609 97.625C107.906 55.312 164.172 32 224 32S340.094 55.312 382.391 97.625C401.141 116.375 401.141 146.75 382.391 165.5S333.234 184.25 314.516 165.5C266.141 117.125 181.859 117.125 133.484 165.5C109.312 189.688 96 221.812 96 256S109.312 322.312 133.484 346.5C181.859 394.875 266.141 394.875 314.516 346.5C322.875 338.125 330.094 329.188 336 320H240C213.484 320 192 298.5 192 272S213.484 224 240 224H400C426.516 224 448 245.5 448 272V288C448 290.906 447.734 293.812 447.203 296.688C439.516 338.469 416.5 380.281 382.391 414.375C340.094 456.688 283.828 480 224 480Z" })
  }
));
GSolid.displayName = "GSolid";
var G_default = GSolid;
