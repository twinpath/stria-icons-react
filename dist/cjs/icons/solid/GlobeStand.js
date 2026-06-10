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
var GlobeStand_exports = {};
__export(GlobeStand_exports, {
  default: () => GlobeStand_default
});
module.exports = __toCommonJS(GlobeStand_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GlobeStandSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 352C293.266 352 368 283.347 368 192C368 100.606 293.267 32 208 32C122.734 32 48 100.653 48 192C48 283.394 122.733 352 208 352ZM348.078 463.992H256.074V426.988C300.701 417.988 343.203 396.234 377.83 361.73C424.631 314.926 448 253.655 448 192.374C448 142.023 432.224 91.666 400.705 49.32L411.457 38.566C414.582 35.441 416.145 31.347 416.145 27.252S414.582 19.062 411.457 15.937L400.08 4.687C396.955 1.562 392.861 0 388.768 0S380.58 1.562 377.455 4.688L334.453 47.695C378.626 86.567 399.987 139.03 399.987 191.961C399.987 297.645 314.612 383.984 208.072 383.984C114 383.984 66.618 320.719 64.189 317.852L4.688 377.359C1.562 380.484 0 384.578 0 388.672S1.562 396.859 4.688 399.984L15.938 411.234C19.063 414.361 23.158 415.925 27.252 415.925S35.439 414.361 38.564 411.234L65.316 384.609C103.066 412.613 147.193 428.238 192.07 431.242V463.992H99.941C80.066 463.992 63.939 480.121 63.939 500C63.939 506.625 69.316 512 75.941 512H372.08C378.705 512 384.08 506.625 384.08 500C384.08 480.121 367.955 463.992 348.078 463.992Z " })
  }
));
GlobeStandSolid.displayName = "GlobeStandSolid";
var GlobeStand_default = GlobeStandSolid;
