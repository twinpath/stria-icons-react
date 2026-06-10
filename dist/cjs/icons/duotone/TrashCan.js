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
var TrashCan_exports = {};
__export(TrashCan_exports, {
  default: () => TrashCan_default
});
module.exports = __toCommonJS(TrashCan_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrashCanDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 96V464C32 490.5 53.5 512 80 512H368C394.5 512 416 490.5 416 464V96H32ZM144 416C144 424.875 136.875 432 128 432S112 424.875 112 416V192C112 183.125 119.125 176 128 176S144 183.125 144 192V416ZM240 416C240 424.875 232.875 432 224 432S208 424.875 208 416V192C208 183.125 215.125 176 224 176S240 183.125 240 192V416ZM336 416C336 424.875 328.875 432 320 432S304 424.875 304 416V192C304 183.125 311.125 176 320 176S336 183.125 336 192V416Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 32.001H320L308.422 8.844C305.713 3.424 300.172 0.001 294.111 0.001H153.889C147.828 0.001 142.289 3.424 139.578 8.844L128 32.001H16C7.164 32.001 0 39.163 0 48.001V80.001C0 88.837 7.164 96.001 16 96.001H432C440.838 96.001 448 88.837 448 80.001V48.001C448 39.163 440.838 32.001 432 32.001Z" })
    ]
  }
));
TrashCanDuotone.displayName = "TrashCanDuotone";
var TrashCan_default = TrashCanDuotone;
