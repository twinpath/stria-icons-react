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
var Anchor_exports = {};
__export(Anchor_exports, {
  default: () => Anchor_default
});
module.exports = __toCommonJS(Anchor_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AnchorLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M571.312 324.688L507.312 260.688C501.062 254.438 490.937 254.438 484.688 260.688L420.688 324.688C414.438 330.938 414.438 341.063 420.688 347.312S437.063 353.562 443.312 347.312L480 310.625V336C480 415.406 415.406 480 336 480H304V224H368C376.844 224 384 216.844 384 208S376.844 192 368 192H304V158.381C340.471 150.947 368 118.631 368 80C368 35.891 332.109 0 288 0S208 35.891 208 80C208 118.631 235.529 150.947 272 158.381V192H208C199.156 192 192 199.156 192 208S199.156 224 208 224H272V480H240C160.594 480 96 415.406 96 336V310.625L132.688 347.312C135.812 350.438 139.906 352 144 352S152.188 350.438 155.312 347.312C161.562 341.062 161.562 330.937 155.312 324.688L91.312 260.688C85.062 254.438 74.937 254.438 68.688 260.688L4.688 324.688C-1.563 330.938 -1.563 341.063 4.688 347.312S21.063 353.562 27.312 347.312L64 310.625V336C64 433.047 142.953 512 240 512H336C433.047 512 512 433.047 512 336V310.625L548.688 347.312C551.812 350.438 555.906 352 560 352S568.188 350.438 571.312 347.312C577.562 341.062 577.562 330.938 571.312 324.688ZM240 80C240 53.531 261.531 32 288 32S336 53.531 336 80S314.469 128 288 128S240 106.469 240 80Z" })
  }
));
AnchorLight.displayName = "AnchorLight";
var Anchor_default = AnchorLight;
