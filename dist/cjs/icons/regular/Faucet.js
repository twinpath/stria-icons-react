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
var Faucet_exports = {};
__export(Faucet_exports, {
  default: () => Faucet_default
});
module.exports = __toCommonJS(Faucet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaucetRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 368V400C512 426.51 490.51 448 464 448H400C373.49 448 352 426.51 352 400V384H323.125C299.75 413 264.25 432 224 432S148.25 413 124.875 384H24C10.746 384 0 373.254 0 360C0 346.744 10.746 336 24 336H150.75C163.5 365.125 192.25 384 224 384S284.5 365.125 297.25 336H368C385.6 336 400 350.4 400 368V400H464V368C464 314.98 421.02 272 368 272H297.25C284.5 242.875 255.75 224 224 224S163.5 242.875 150.75 272H24C10.746 272 0 261.254 0 248C0 234.744 10.746 224 24 224H124.875C143.5 200.875 169.625 184.25 200 178.375V147.625C200 147.625 81.375 160 80 160C71.25 160 64 152.5 64 143.125V112.875C64 103.5 71.25 96 80 96C81.375 96 73.875 95.25 200 109.375V80C200 71.162 207.164 64 216 64H232C240.836 64 248 71.162 248 80V109.375C374.125 95.25 366.625 96 368 96C376.75 96 384 103.5 384 112.875V143.125C384 152.5 376.75 160 368 160C366.625 160 248 147.625 248 147.625V178.375C278.375 184.25 304.5 200.875 323.125 224H368C447.529 224 512 288.471 512 368Z" })
  }
));
FaucetRegular.displayName = "FaucetRegular";
var Faucet_default = FaucetRegular;
