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
var Outlet_exports = {};
__export(Outlet_exports, {
  default: () => Outlet_default
});
module.exports = __toCommonJS(Outlet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const OutletDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 288C210.781 288 200 298.781 200 312V336H248V312C248 298.781 237.219 288 224 288ZM160 192C151.164 192 144 199.164 144 208V256C144 264.836 151.164 272 160 272C168.838 272 176 264.836 176 256V208C176 199.164 168.838 192 160 192ZM288 192C279.164 192 272 199.164 272 208V256C272 264.836 279.164 272 288 272C296.838 272 304 264.836 304 256V208C304 199.164 296.838 192 288 192ZM332.543 378.596C328.896 382.096 324 383.996 318.896 383.996H129.105C124 383.996 119.105 382.096 115.459 378.596C83.793 347.396 64 304.098 64 256C64 207.9 83.793 164.602 115.459 133.404C119.105 129.904 124 127.904 129.105 128.004H318.896C324 127.904 328.896 129.904 332.543 133.404C364.209 164.602 384 207.9 384 256C384 304.098 364.209 347.396 332.543 378.596Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM332.543 378.596C328.896 382.096 324 383.996 318.896 383.996H129.105C124 383.996 119.105 382.096 115.459 378.596C83.793 347.396 64 304.098 64 256C64 207.9 83.793 164.602 115.459 133.404C119.105 129.904 124 127.904 129.105 128.004H318.896C324 127.904 328.896 129.904 332.543 133.404C364.209 164.602 384 207.9 384 256C384 304.098 364.209 347.396 332.543 378.596Z" })
    ]
  }
));
OutletDuotone.displayName = "OutletDuotone";
var Outlet_default = OutletDuotone;
