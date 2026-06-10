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
var SidebarFlip_exports = {};
__export(SidebarFlip_exports, {
  default: () => SidebarFlip_default
});
module.exports = __toCommonJS(SidebarFlip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SidebarFlipDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 32H288V480H64C28.654 480 0 451.346 0 416V96C0 60.652 28.654 32 64 32Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 32V480H448C483.346 480 512 451.346 512 416V96C512 60.652 483.346 32 448 32H288ZM352 312C352 298.744 362.746 288 376 288H424C437.254 288 448 298.744 448 312C448 325.254 437.254 336 424 336H376C362.746 336 352 325.254 352 312ZM352 216C352 202.744 362.746 192 376 192H424C437.254 192 448 202.744 448 216C448 229.254 437.254 240 424 240H376C362.746 240 352 229.254 352 216ZM352 120C352 106.744 362.746 96 376 96H424C437.254 96 448 106.744 448 120C448 133.254 437.254 144 424 144H376C362.746 144 352 133.254 352 120Z" })
    ]
  }
));
SidebarFlipDuotone.displayName = "SidebarFlipDuotone";
var SidebarFlip_default = SidebarFlipDuotone;
