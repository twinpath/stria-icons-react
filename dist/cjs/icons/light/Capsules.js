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
var Capsules_exports = {};
__export(Capsules_exports, {
  default: () => Capsules_default
});
module.exports = __toCommonJS(Capsules_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CapsulesLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M554.605 302.162L422.941 120.941C401.934 92.029 368.039 74.77 332.27 74.77H332.268C308.506 74.77 285.762 82.168 266.498 96.164C244.119 112.422 230.021 135.592 224 160.584V144C224 82.242 173.758 32 112 32S0 82.242 0 144V368C0 429.756 50.242 480 112 480S224 429.756 224 368V214.395C227.393 227.771 233.127 240.775 241.721 252.605L373.385 433.826C394.391 462.738 428.289 480 464.061 480C487.82 480 510.561 472.602 529.826 458.604C579.789 422.305 590.904 352.125 554.605 302.162ZM192 368C192 412.182 156.184 448 112 448C67.818 448 32 412.182 32 368V272H192V368ZM192 240H32V144C32 99.816 67.818 64 112 64C156.184 64 192 99.816 192 144V240ZM285.309 122.053C299.506 111.736 315.963 106.77 332.266 106.768C357.004 106.768 381.398 118.205 397.053 139.752L468.75 238.436L453.484 217.437L324.039 311.463L267.609 233.797C241.639 198.053 249.562 148.023 285.309 122.053ZM511.018 432.715C496.818 443.031 480.363 448 464.061 448C439.32 448 414.928 436.562 399.273 415.016L339.057 332.135L342.844 337.344L472.295 243.314L528.717 320.971C554.686 356.715 546.762 406.746 511.018 432.715Z" })
  }
));
CapsulesLight.displayName = "CapsulesLight";
var Capsules_default = CapsulesLight;
