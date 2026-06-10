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
var TrashCanList_exports = {};
__export(TrashCanList_exports, {
  default: () => TrashCanList_default
});
module.exports = __toCommonJS(TrashCanList_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrashCanListThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M376 120C371.594 120 368 123.578 368 128V440C368 470.875 342.875 496 312 496H104C73.125 496 48 470.875 48 440V128C48 123.578 44.406 120 40 120S32 123.578 32 128V440C32 479.703 64.312 512 104 512H312C351.688 512 384 479.703 384 440V128C384 123.578 380.406 120 376 120ZM408 64H307.383L286.438 22.125C279.625 8.469 265.938 0 250.656 0H165.344C150.062 0 136.375 8.469 129.562 22.109L108.617 64H8C3.594 64 0 67.578 0 72S3.594 80 8 80H408C412.406 80 416 76.422 416 72S412.406 64 408 64ZM126.508 64L143.875 29.25C147.969 21.078 156.188 16 165.344 16H250.656C259.812 16 268.031 21.078 272.125 29.266L289.492 64H126.508ZM272 432V176C272 171.578 268.406 168 264 168S256 171.578 256 176V432C256 436.422 259.594 440 264 440S272 436.422 272 432ZM160 432V176C160 171.578 156.406 168 152 168S144 171.578 144 176V432C144 436.422 147.594 440 152 440S160 436.422 160 432ZM632 152H456C451.594 152 448 155.594 448 160S451.594 168 456 168H632C636.406 168 640 164.406 640 160S636.406 152 632 152ZM536 408H456C451.594 408 448 411.594 448 416S451.594 424 456 424H536C540.406 424 544 420.406 544 416S540.406 408 536 408ZM600 280H456C451.594 280 448 283.594 448 288S451.594 296 456 296H600C604.406 296 608 292.406 608 288S604.406 280 600 280Z" })
  }
));
TrashCanListThin.displayName = "TrashCanListThin";
var TrashCanList_default = TrashCanListThin;
