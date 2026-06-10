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
var CarBattery_exports = {};
__export(CarBattery_exports, {
  default: () => CarBattery_default
});
module.exports = __toCommonJS(CarBattery_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CarBatterySolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 128H448V80C448 71.163 440.837 64 432 64H336C327.163 64 320 71.163 320 80V128H192V80C192 71.163 184.837 64 176 64H80C71.163 64 64 71.163 64 80V128H64C28.8 128 0 156.8 0 192V384C0 419.2 28.8 448 64 448H448C483.2 448 512 419.2 512 384V192C512 156.8 483.2 128 448 128ZM176 272H80C71.164 272 64 264.836 64 256S71.164 240 80 240H176C184.836 240 192 247.164 192 256S184.836 272 176 272ZM432 272H400V304C400 312.836 392.836 320 384 320S368 312.836 368 304V272H336C327.164 272 320 264.836 320 256S327.164 240 336 240H368V208C368 199.164 375.164 192 384 192S400 199.164 400 208V240H432C440.836 240 448 247.164 448 256S440.836 272 432 272Z" })
  }
));
CarBatterySolid.displayName = "CarBatterySolid";
var CarBattery_default = CarBatterySolid;
