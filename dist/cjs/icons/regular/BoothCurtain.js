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
var BoothCurtain_exports = {};
__export(BoothCurtain_exports, {
  default: () => BoothCurtain_default
});
module.exports = __toCommonJS(BoothCurtain_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoothCurtainRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 56V488C0 501.25 10.75 512 24 512S48 501.25 48 488V56C48 51.594 51.594 48 56 48H112V0H56C25.125 0 0 25.125 0 56ZM456 0H144V400C144 435.281 172.703 464 208 464C223.211 464 237.008 458.445 248 449.553C258.992 458.445 272.789 464 288 464S317.008 458.445 328 449.553C338.992 458.445 352.789 464 368 464S397.008 458.445 408 449.553C418.992 458.445 432.789 464 448 464C453.557 464 458.855 463.066 464 461.729V488C464 501.25 474.75 512 488 512S512 501.25 512 488V56C512 25.125 486.875 0 456 0ZM224 400C224 408.812 216.828 416 208 416S192 408.812 192 400V48H224V400ZM304 400C304 408.812 296.828 416 288 416S272 408.812 272 400V48H304V400ZM384 400C384 408.812 376.828 416 368 416S352 408.812 352 400V48H384V400ZM464 400C464 408.812 456.828 416 448 416S432 408.812 432 400V48H456C460.406 48 464 51.594 464 56V400Z" })
  }
));
BoothCurtainRegular.displayName = "BoothCurtainRegular";
var BoothCurtain_default = BoothCurtainRegular;
