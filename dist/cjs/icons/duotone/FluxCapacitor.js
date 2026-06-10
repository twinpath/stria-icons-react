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
var FluxCapacitor_exports = {};
__export(FluxCapacitor_exports, {
  default: () => FluxCapacitor_default
});
module.exports = __toCommonJS(FluxCapacitor_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FluxCapacitorDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 112V400C447.875 444.125 412.125 479.875 368 480H80C35.875 479.875 0.125 444.125 0 400V112C0.125 67.875 35.875 32.125 80 32H368C412.125 32.125 447.875 67.875 448 112ZM400 160C400 115.816 364.184 80 320 80S240 115.816 240 160C240 176.301 244.934 191.422 253.305 204.07L224 233.375L194.68 204.098C203.062 191.445 208 176.312 208 160C208 115.816 172.184 80 128 80S48 115.816 48 160C48 204.18 83.816 240 128 240C144.301 240 159.426 235.07 172.07 226.695L208 262.625V273.613C171.484 281.027 144 313.297 144 352C144 396.18 179.816 432 224 432S304 396.18 304 352C304 313.297 276.516 281.027 240 273.613V262.625L275.898 226.68C288.549 235.062 303.686 240 320 240C364.184 240 400 204.18 400 160Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 112C293.49 112 272 133.49 272 160C272 167.396 273.811 174.318 276.799 180.576L224 233.375L171.174 180.627C174.178 174.355 176 167.418 176 160C176 133.49 154.51 112 128 112S80 133.49 80 160S101.49 208 128 208C135.396 208 142.318 206.189 148.576 203.201L208 262.625V306.937C189.4 313.549 176 331.131 176 352C176 378.51 197.49 400 224 400S272 378.51 272 352C272 331.131 258.6 313.549 240 306.938V262.625L299.371 203.172C305.643 206.176 312.582 208 320 208C346.51 208 368 186.51 368 160S346.51 112 320 112Z" })
    ]
  }
));
FluxCapacitorDuotone.displayName = "FluxCapacitorDuotone";
var FluxCapacitor_default = FluxCapacitorDuotone;
