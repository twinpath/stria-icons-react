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
const OutletRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H384C419.348 480 448 451.344 448 416V96C448 60.656 419.348 32 384 32ZM400 416C400 424.82 392.822 432 384 432H64C55.178 432 48 424.82 48 416V96C48 87.18 55.178 80 64 80H384C392.822 80 400 87.18 400 96V416ZM309.406 144H138.596C134 143.914 129.596 145.664 126.312 148.727C97.814 176.023 80 213.914 80 256S97.814 335.969 126.312 363.273C129.596 366.336 134 367.996 138.596 367.996H309.406C314 367.996 318.406 366.336 321.689 363.273C350.188 335.969 368 298.086 368 256S350.188 176.023 321.689 148.727C318.406 145.664 314 143.914 309.406 144ZM176 256C176 264.836 168.838 272 160 272C151.164 272 144 264.836 144 256V208C144 199.164 151.164 192 160 192C168.838 192 176 199.164 176 208V256ZM248 336H200V312C200 298.781 210.781 288 224 288S248 298.781 248 312V336ZM304 256C304 264.836 296.838 272 288 272C279.164 272 272 264.836 272 256V208C272 199.164 279.164 192 288 192C296.838 192 304 199.164 304 208V256Z" })
  }
));
OutletRegular.displayName = "OutletRegular";
var Outlet_default = OutletRegular;
