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
var EnvelopesBulk_exports = {};
__export(EnvelopesBulk_exports, {
  default: () => EnvelopesBulk_default
});
module.exports = __toCommonJS(EnvelopesBulk_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EnvelopesBulkThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M296 256H56C25.125 256 0 281.125 0 312V456C0 486.875 25.125 512 56 512H296C326.875 512 352 486.875 352 456V312C352 281.125 326.875 256 296 256ZM336 456C336 478.062 318.062 496 296 496H56C33.938 496 16 478.062 16 456V343.047L151.016 438.25C158.375 444.141 167.188 447.078 176 447.078S193.625 444.141 200.984 438.25L336 343.047V456ZM336 322.547L190.984 425.75C182.172 432.812 169.828 432.812 161.016 425.75L16 322.547V312C16 289.938 33.938 272 56 272H296C318.062 272 336 289.938 336 312V322.547ZM72 224C76.422 224 80 220.422 80 216V56C80 33.938 97.938 16 120 16H424C446.062 16 464 33.938 464 56V104C464 108.422 467.578 112 472 112S480 108.422 480 104V56C480 25.125 454.875 0 424 0H120C89.125 0 64 25.125 64 56V216C64 220.422 67.578 224 72 224ZM584 144H280C249.125 144 224 169.125 224 200C224 204.422 227.578 208 232 208S240 204.422 240 200C240 177.938 257.938 160 280 160H584C606.062 160 624 177.938 624 200V360C624 382.062 606.062 400 584 400H392C387.578 400 384 403.578 384 408S387.578 416 392 416H584C614.875 416 640 390.875 640 360V200C640 169.125 614.875 144 584 144ZM576 280C580.422 280 584 276.422 584 272V208C584 203.578 580.422 200 576 200H512C507.578 200 504 203.578 504 208V272C504 276.422 507.578 280 512 280H576ZM520 216H568V264H520V216Z" })
  }
));
EnvelopesBulkThin.displayName = "EnvelopesBulkThin";
var EnvelopesBulk_default = EnvelopesBulkThin;
